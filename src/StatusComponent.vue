<template>
    <div>
        <h3> Server Status {{status}}</h3>
        <button @click="changeStatus">change status</button>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                status: 'critical'
            }
        },
        methods: {
            changeStatus(){
                this.status = 'Awesome'
            }
        }
    }
</script>
