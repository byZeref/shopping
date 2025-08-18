<script setup>
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

defineEmits(['update:show:dialog'])
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  isErrorDialog: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Atención',
  },
  description: {
    type: String,
    default: 'Make changes to your profile here. Click save when you are done.',
  },
})

</script>

<template>
  <DialogRoot :open="show" @update:open="(val) => $emit('update:show:dialog', val)">
    <DialogPortal>
      <DialogOverlay class="bg-black/75 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
          class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle
          class="m-0 text-[17px] font-semibold"
          :class="{ 'text-red-600': isErrorDialog }"
        >
          {{ isErrorDialog ? 'Error' : title }}
        </DialogTitle>
        <DialogDescription
          class="mt-[10px] mb-5 text-sm leading-normal"

        >
          {{ description }}
        </DialogDescription>

        <slot name="default" />

        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="error-btn text-sm h-[35px!important]"
              :class="{ 'bg-red-200 text-red-600': isErrorDialog }"
            >
              Aceptar
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <XIcon size="16" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>

</style>