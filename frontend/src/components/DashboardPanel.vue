<template>
    <div class="dashboard">
        <div class="pushArticle">
            <a href='/articleEditor'><button class = "PushButton">Écrire un article</button></a>
        </div>
    </div>


</template>

<script>
export default {
    name: 'admin-dashboard'
}
</script>

<style lang="scss" scoped>

.PushButton{
    
background-color: #555555;
color: white;
border-color: #555555;
font-size: 20px;
padding: 16px;
}

.pushArticle{
margin: 10px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

</style>