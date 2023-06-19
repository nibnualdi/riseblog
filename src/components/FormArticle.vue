<template>
  <QuillEditor theme="snow" @update:content="handleForm" v-model:content="content" :toolbar="toolbarOptions"
     placeholder="Type your content here..." />
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'

// themes
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref, watchEffect } from 'vue';
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';

export default {
  components: {
    QuillEditor
  },
  setup() {
    let content = ref("");
    const toolbarOptions = [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['image'],

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

      ['clean']                                         // remove formatting button
    ]

    const handleForm = (e) => {
      // console.log(e)
      // console.log(content.value, "content")
    }

    watchEffect(() => console.log(content.value.ops, "content"));

    return { handleForm, content, toolbarOptions }
  }
}
</script>