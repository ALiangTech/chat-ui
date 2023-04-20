// 单个词输出
// 接收字符串 输出单个词

import { watch, ref, unref } from "vue";
import { useInterval } from "@vueuse/core";
import { isUndefined } from "lodash-es";

export default function useOutPutChar({ text, completed }) {
  const chars = ref("");
  const charsHtmlVersion = ref("");
  const char = ref("");
  const isCompleted = ref(false);
  const loop = ref(0); // 执行次数
  // text 改变重新执行
  watch(
    text,
    (n) => {
      chars.value = "";
      charsHtmlVersion.value = "";
      isCompleted.value = false;
      loop.value++
      const { counter, pause } = useInterval(200, {
        controls: true,
      });
      const texts = unref(n).split("");
      watch(counter, (value) => {
        let index = value - 1;
        const temp = texts[index];
        if (isUndefined(temp)) {
            completed && completed(loop.value);
            isCompleted.value = true; // 打印效果完成
          pause();
        } else {
          char.value = temp;
          chars.value = chars.value + temp;
          charsHtmlVersion.value = charsHtmlVersion.value + `<span>${temp}</span>`
        }
      });
    },
    { immediate: true }
  );
  return { char, chars,charsHtmlVersion, isCompleted };
}
