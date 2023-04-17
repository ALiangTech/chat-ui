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
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
}
.chat_bubble span {
    display: inline-flex;
    background-color: #95ec69;
    border-radius: 4px;
    font-size: 12px;
    height: 100%;
    align-items: center;
    padding: 4px 8px;
}
.chat_bubble::after {
    display: block;
    position: absolute;
    z-index: -1;
    border-width: 10px 10px 0 0;
    content: "";
    border-style: solid;
    border-color: #95ec69 transparent transparent transparent;
    right: -2px;
    top: 12px;
    transform: rotate(136deg);
}

</style> 