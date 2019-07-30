<template>
    <div id="new-employee">
        <h3>New Employee</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input field col s12">
                        <input type="text" v-model="employee_id" required>
                        <label>Employee ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input field col s12">
                        <input type="text" v-model="name" required>
                        <label>Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input field col s12">
                        <input type="text" v-model="dept" required>
                        <label>Department</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input field col s12">
                        <input type="text" v-model="position" required>
                        <label>Position</label>
                    </div>
                </div>

                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn blue">Cancel</router-link>

            </form>
        </div>
    </div>
</template>

<script>   
import db from './firebaseInit'             
export default {
    name: 'new-employee',
    data () {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
        }
    },
    methods: {                  //This is where we will create our save employee.
        saveEmployee () {
            db.collection('employees').add({            //This .add will also return a promise. which we input below.
                employee_id: this.employee_id,      //this.employee_id will be bound to the v-model="employee_id". It gets the value from there.
                name: this.name,
                dept: this.dept,
                position: this.position 
            })
            .then(docRef => this.$router.push('/'))     //ES6
            .catch(error => console.log(err))
        }
    }
}
</script>