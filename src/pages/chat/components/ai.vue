<template>
    <div class="ai">
        <div class="avatar">
            <img src="./svg/ai.svg"/>
        </div>
        <chatPopover>
           <MarkdownIt :source="answer" v-show="answer"></MarkdownIt>
           <loading  v-show="!answer"></loading>
        </chatPopover>
    </div>
</template>
<script setup>
import { ref,watch} from "vue"
import chatPopover from '../../../components/chat-popover-left.vue';
import loading from "../../../components/loading.vue";
import MarkdownIt from "@/components/markdown-it.vue";
const props = defineProps({
    data: {
        type: [Object]
    }
})
const answer =ref('')
watch(()=> props.data, () => {
    sendChat();
}, {
    immediate:true,
    deep: true
})
// 调用接口获取内容
function sendChat() {
    window.fetch("http://hanjunty.top:9092/chat", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({
            "messages": [{"role": "user", "content": props.data.question}]
          })
    }).then(res => res.body).then(body => {
        const reader = body?.getReader();
        const textDecoder = new TextDecoder();
        function pump() {
            return reader.read().then(({ done, value }) => {
              // 读不到更多数据就关闭流
              if (done) {
                return;
              }
              // 将下一个数据块置入流中
              const content = textDecoder.decode(value)
            //   const strings = content.split("\n\n").filter(item => item).map((item,index) => {
            //     const [,jsonString] = item.split("data: ")
            //     console.log('<',item,'>', index)
            //     if(jsonString !== '[DONE]' && jsonString.endsWith('}')) {
            //         const temp = JSON.parse(jsonString)
            //         const {choices:[{ delta: { content } }]} = temp;
            //         return content
            //     }
            //   }).filter(item => item)
            //   const text = strings.join();
              answer.value = answer.value + content
              return pump();
            });
          }
          pump();
    })
}
</script>
<style>
.ai {
    display: flex;
}
.ai p {
    margin: 0;
}
</style>