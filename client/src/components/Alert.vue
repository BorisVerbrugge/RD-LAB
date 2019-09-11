<template>
        <div>
                <b-alert show 
                                 variant="success" 
                                 dismissible>
                        {{ message }}
                </b-alert>
                <br>
        </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>
