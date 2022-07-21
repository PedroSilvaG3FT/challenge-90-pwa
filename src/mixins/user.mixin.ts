import store from '@/store'
import { UserService } from '@/services/user.service'
import { authActions } from '@/store/reducers/auth.reducer'

export default {
    userService: new UserService(),
    updateUserStore() {
        const user = store.getState().auth.user
        if (!user.id) return

        this.userService
            .getById(user.id)
            .then(({ data }) => authActions.setUser(data))
    }
}
