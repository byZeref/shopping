<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import XIcon from "~/components/icons/XIcon.vue";
import ExclamationIcon from "~/components/icons/ExclamationIcon.vue";
import WarningIcon from "~/components/icons/WarningIcon.vue";
import CheckIcon from "~/components/icons/CheckIcon.vue";

type DialogType = 'info' | 'success' | 'warning' | 'error'
interface Props {
  show: boolean,
  type: DialogType,
  title?: string,
  description?: string,
  cancellable?: boolean,
  confirmAction?: () => void,
  confirmText?: string,
}

defineEmits(['update:show:dialog'])
const props = withDefaults(defineProps<Props>(), {
  confirmText: 'Aceptar'
})

const titleText = computed(() => {
  if (props.title) return props.title

  let text
  switch (props.type) {
    case 'error':
      text = 'Error!'
      break
    case 'warning':
      text = 'Atención!'
      break
    case 'info':
      text = 'Importante!'
      break
    case 'success':
      text = 'Bien!'
      break
  }
  return text
})

</script>

<template>
  <DialogRoot :open="show" @update:open="(val) => $emit('update:show:dialog', val)">
    <DialogPortal>
      <DialogOverlay class="bg-black/75 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
          class="data-[state=open]:animate-contentShow flex flex-col fixed top-[50%] left-[50%] min-h-[280px] max-h-[85vh] w-[70vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[30px] pt-[65px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <div
          class="absolute -top-[50px] left-[calc(50%-50px)] w-[100px] h-[100px] content-center rounded-full shadow-md"
          :class="[
            { 'bg-red-500': type === 'error' },
            { 'bg-sky-500': type === 'info' },
            { 'bg-amber-600': type === 'warning' },
            { 'bg-emerald-500': type === 'success' },
          ]"
        >
          <XIcon v-if="type === 'error'" size="60" color="#fff" class="mx-auto" />
          <WarningIcon v-else-if="type === 'warning'" size="60" color="#fff" class="mx-auto" />
          <ExclamationIcon v-else-if="type === 'info'" size="60" color="#fff" class="mx-auto" />
          <CheckIcon v-else-if="type === 'success'" size="60" color="#fff" class="mx-auto" />
        </div>

        <DialogTitle class="m-1 text-2xl md:text-3xl text-center text-gray-700 font-semibold">
          {{ titleText }}
        </DialogTitle>
        <DialogDescription class="mt-2 mb-6 text-sm md:text-base text-center">
          {{ description }}
        </DialogDescription>

        <slot name="default" />

        <div class="mt-auto flex flex-col gap-2 justify-end">
          <slot name="actions">
            <DialogClose v-if="cancellable" as-child>
              <button
                class="error-btn text-sm md:text-base w-full"
                :class="[
                  { 'border border-red-500 text-red-500': type === 'error' },
                  { 'border border-sky-500 text-sky-500': type === 'info' },
                  { 'border border-amber-600 text-amber-600': type === 'warning' },
                  { 'border border-emerald-500 text-emerald-500': type === 'success' },
                ]"
              >
                Cancelar
              </button>
            </DialogClose>
            <button
              class="error-btn text-sm md:text-base w-full text-white"
              :class="[
                { 'bg-red-500': type === 'error' },
                { 'bg-sky-500': type === 'info' },
                { 'bg-amber-600': type === 'warning' },
                { 'bg-emerald-500': type === 'success' },
              ]"
              @click="confirmAction ? confirmAction() : $emit('update:show:dialog', false)"
            >
              {{ confirmText }}
            </button>
          </slot>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>

</style>