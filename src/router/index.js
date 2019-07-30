import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'
import ViewEmployee from '@/components/ViewEmployee'

Vue.use(Router)

//We will define our routes here. We have to add and put all the routes that we added above and the name cases must match.
//Follow this and keep this in mind. 

export default new Router({
  routes: [
    {
      path: '/',              //This is the path and will render the dashboard.
      name: 'dashboard',      //This is the name of the Component.
      component: Dashboard    //This is the actual name of the component which we created.
    },
    {
      path: '/new',           //THis will be under the dashboard and will follow the linking style of "/new"
      name: 'new-employee',
      component: NewEmployee
    },  
    {
      path: '/edit/:employee_id',   //We have our place holder and this is a Parameter. This will be linking under the "Dashboard/edit/:employee_id"
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',       //This will show us the data fetched from the "employee_id" route as we created above.
      name: 'view-employee',
      component: ViewEmployee
    }
  ]
})
