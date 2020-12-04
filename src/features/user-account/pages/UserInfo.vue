<template>
    <div>
        <div v-if="!isError">
            <PersonalInfo :user="user" />
            <div v-for="address in user.addresses" :key="address.id">
                <UserAddress :address="address" />
            </div>
        </div>
        <div v-else>
            <p>Error getting data</p>
        </div>
    </div>
</template>

<script>
import PersonalInfo from '../components/PersonalInfo';
import UserAddress from '../components/UserAddress';

import UserService from '../services/user.service';

export default {
    components: { PersonalInfo, UserAddress },
    data() {
        return {
            user: {},
            isError: false,
            userId: null
        };
    },
    async created() {
        this.userId = this.$route.params.id;
        const response = await UserService.getUser(this.userId);
        if (response.isError) {
            this.isError = true;
        } else {
            this.user = response;
        }
    }
};
</script>

<style lang="scss" scoped></style>
