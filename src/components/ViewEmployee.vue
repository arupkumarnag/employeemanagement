<template>
    <div id="view-employee">
        <ul class="collection with-header">
            <li class="collection-header"><h4>{{name}}</h4></li>
            <li class="collection-item">Employee ID#: {{employee_id}}</li>
            <li class="collection-item">Department: {{dept}}</li>
            <li class="collection-item">Position: {{position}}</li>
        </ul>
        <router-link to="/" class="btn grey" >Back</router-link>
        <button @click="deleteEmployee" class="btn-red">Delete</button>
        <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'edit-employee', params: {employee_id: employee_id}}" class="btn-floating btn-large red">
                <i class="fa fa-pencil"></i></router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'                
export default {
    name: 'view-employee',
    data () {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
        }
    },
    beforeRouteEnter(to, from, next) {    //Below we will fetch the each individual employe. For that we need to bring in our database from firebase.
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.employee_id = doc.data().employee_id
                    vm.name = doc.data().name
                    vm.dept = doc.data().department
                    vm.position = doc.data().position
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'           //We accessed the router and assigned to a method of "fetchData". We create the method below.
    },
    methods: {      //we can define custom methods like this.
        fetchData () {
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.employee_id = doc.data().employee_id
                    this.name = doc.data().name
                    this.dept = doc.data().dept
                    this.position = doc.data().position
                })
            })
        },
        deleteEmployee () {                      //Delete Employee
            if(confirm('Are You Sure ?')) {         //Confirmation to Delete Employee
                db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()                //Deletes the employee.
                    this.$router.push('/')           //This will redirect to the home page. To get the redirect, we heed to use "$router"
                })
            })
            }
        }
    }
}
</script>