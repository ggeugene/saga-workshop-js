import { createAction } from "@reduxjs/toolkit";

export default function createApiRequestActions(
  type,
  prepareAction = (args) => ({ payload: args.payload, meta: args.meta }),
  options = {}
) {
  function populateMeta(meta = {}) {
    return {
      ...(meta && meta),
      ...(options && { ...options }),
    };
  }

  return {
    init: createAction(`${type}__INIT`, (payload = {}, meta = {}) => ({
      payload,
      meta: populateMeta(meta),
    })),
    request: createAction(`${type}_REQUEST`, (args = {}) => {
      const { payload, meta } = prepareAction(args);
      return { payload, meta: populateMeta(meta) };
    }),
    start: createAction(`${type}_REQUEST-START`, (payload = {}, meta = {}) => ({
      payload,
      meta,
    })),
    success: createAction(
      `${type}_REQUEST-SUCCESS`,
      (payload = { data: {}, meta: {} }, meta) => ({
        payload,
        meta: populateMeta(meta),
      })
    ),
    error: createAction(`${type}_REQUEST-ERROR`, (payload, meta) => ({
      payload,
      meta: populateMeta(meta),
    })),
  };
}
