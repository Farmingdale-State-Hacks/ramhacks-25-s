import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { createRouter } from "./router";

export default (createStartHandler as unknown as (opts: { createRouter: typeof createRouter }) => (cb: typeof defaultStreamHandler) => ReturnType<typeof defaultStreamHandler>)({
	createRouter,
})(defaultStreamHandler);
