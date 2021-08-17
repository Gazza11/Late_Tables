
const UserService = {

    async updateAccounts(id, payload) {
        const response = await fetch('https://backend-latetables.herokuapp.com/users/' + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        console.log(data)
    }
}

export default UserService