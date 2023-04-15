<template>
    <span v-html="md.render(props.source)"></span>
</template>
<script setup>
import markDownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/google-dark.css'
const md = markDownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})
const props = defineProps({
    source: {
        type: [String]
    }
})
</script>