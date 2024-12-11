<script>
import { h, ref, onBeforeMount } from 'vue'
import { useAuth } from '@okta/okta-vue'

export default {
  setup(_props, { slots }) {
    const error = ref(null);
    const $auth = useAuth();
    onBeforeMount(async () => {
      try {
        await $auth.handleLoginRedirect();
      } catch (e) {
        const isInteractionRequiredError = $auth.isInteractionRequiredError || $auth.idx.isInteractionRequiredError;
        if (isInteractionRequiredError(e)) {
          const { onAuthResume, onAuthRequired } = $auth.options;
          const callbackFn = onAuthResume || onAuthRequired;
          if (callbackFn) {
            callbackFn($auth);
            return;
          }
        }
        error.value = e.toString();
      }
    });
    return () => {
      if (slots.error) {
        return h('div', slots.error({ error: error.value }));
      }
      return error.value;
    }
  }
}
</script>
