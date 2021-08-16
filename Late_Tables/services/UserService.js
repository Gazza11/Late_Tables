
const UserService = {

    async updateAccounts(id, payload) {
        return fetch('https://backend-latetables.herokuapp.com/users/' + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        await (res => res.json())
    }
}

export default UserService