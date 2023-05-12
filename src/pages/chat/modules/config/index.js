import { createApp ,h, defineComponent} from "vue";
import ConfigPopup from './config-popup.vue'
import PopupContainer from './popup-container.vue'

function delElFormID (id = '') {
    const el = document.querySelector(`#${id}`)
    if(el) {
        el.remove();
    }
}
function insertElToBody() {
    const id = "p__id__"
    delElFormID(id)
    const el = document.createElement('div')
    el.id = id
    document.body.appendChild(el)
    return id
}

export function useConfigPopup() {
    const open = () => {
        const root = defineComponent({
            setup() {
                return () => h(PopupContainer, {
                    "onUpdate:show": true,
                }, {
                    default: () => h(ConfigPopup)
                })
            }
        })
        const mountID = `#${insertElToBody()}`
        createApp(root).mount(mountID);
        
    }
    return { open }
}