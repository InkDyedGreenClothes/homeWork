import { onMounted, reactive, onUnmounted } from 'vue'
export function useMousePosition() {
    // 封装鼠标经过事件
    // 使用 reactive 创建一个响应式对象
    const position = reactive({
        x: 0,
        y: 0
    })
    const mousemoveFn = (e) => {
        position.x = e.x;
        position.y = e.y;
    }
    // 当组件挂载之后添加 mousemove 事件
    onMounted(() => {
        console.log('onMounted');
        window.addEventListener('mousemove', mousemoveFn, false)
    })
    // 当组件卸载后移除 mousemove 事件
    onUnmounted(() => {
        console.log('onUnmounted');
        window.removeEventListener('mousemove', mousemoveFn, false)
    })
    return position;
}