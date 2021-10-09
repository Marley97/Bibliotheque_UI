<template lang="">
			<div class="category">
				<div class="row">
					<div class="card" v-for = "item in $store.state.search" :key="item.id" @click="bookroter(item)">
						<img class="card-img" :src="item.couverture">
						<p class="card-text">{{item.titre}}</p>
					</div>
				</div>
			</div>
</template>
<script>
export default {
    
}
</script>
<style scope="">
    
</style>