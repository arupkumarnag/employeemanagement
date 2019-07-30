<template>
    <div id="dashboard">
        <ul class="collection with header">
            <li class="collection-header"><h4>Employees</h4></li>
            <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
                <div class="chip">{{employee.dept}}</div>{{employee.employee_id}}:{{employee.name}}

                <router-link class="secondary-content" v-bind:to="{name: 'view-employee', params: {employee_id: employee.employee_id}}">
                    <i class="fa fa-eye"></i>
                </router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>                //This will basically be the boilerplate for our components.
import db from './firebaseInit'  //Importing firebaseInit file for database operations.      
export default {
    name: 'dashboard',
    data () {
        return {
            employees: []       //creating our data object with an empty array, this is the peoperty whcih we want to fill when we fetch our data.
        }
    },
    created () {        //When we use this created method, this will run when the component is created or loaded. So, it will automatically run.
        db.collection('employees').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {                          //forEach takes a callback.                
                const data = {                      //Here we get all the data that we get from the document that is fetched from our firestore.
                    'id': doc.id,                                   //has to be formatted like this and doc.id is the firebase id.
                    'employee_id': doc.data().employee_id,          //This is our employee id which we want to render.
                    'name': doc.data().name,
                    'dept': doc.data().department,
                    'position': doc.data().position
                }
                this.employees.push(data)       //We pushed the employees object to the above employees: [].                          
            });
        });
    }
}
</script>

 