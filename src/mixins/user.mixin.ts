import store from '@/store'
import { UserService } from '@/services/user.service'
import { authActions } from '@/store/reducers/auth.reducer'

export default {
    userService: new UserService(),
    user: store.getState().auth.user,
    updateUserStore() {
        if (!this.user.id) return

        this.userService
            .getById(this.user.id)
            .then(({ data }) => authActions.setUser(data))
    }
}
