<template>
    <section class="chat_bubble">
        <span> <slot></slot></span>
    </section>
</template>
<style scoped>
.chat_bubble {
    position: relative;
    display: inline-flex;
    flex: 1;
    align-items: center;
    margin-left: 10px;
    color: #4e4d4d;
}
.chat_bubble span {
    display: inline-flex;
    background-color: #dcdae8;
    border-radius: 4px;
    font-size: 12px;
    height: 100%;
    align-items: center;
    padding: 4px 8px;
}
.chat_bubble::before {
    display: block;
    position: absolute;
    z-index: -1;
    border-width: 10px 10px 0 0;
    content: "";
    border-style: solid;
    border-color: #dcdae8 transparent transparent transparent;
    left: -2px;
    top: 12px;
    transform: rotate(-48deg);
}

</style> 