import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";

// 引入想要使用的图标
import { FaFortAwesome, FaTag, FaSatelliteDish, RiBookReadLine, MdBookmarkborder } from "oh-vue-icons/icons";

addIcons(FaFortAwesome, FaTag, FaSatelliteDish, RiBookReadLine, MdBookmarkborder);

export default defineClientConfig({});