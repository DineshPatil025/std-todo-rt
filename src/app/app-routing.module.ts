import { NgModule } from "@angular/core";
import { StudDashComponent } from "./student/stud-dash/stud-dash.component";
import { TodoDashComponent } from "./todo/todo-dash/todo-dash.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";


const appRoutes = [
    {
        path: "",
        component:TodoDashComponent
    },
    {
        path : "stud",
        component: StudDashComponent
    },
    {
        path : "todo",
        component: TodoDashComponent
    },
    // {
    //     path: "page-not-found",
    //     component: PageNotFoundComponent
    // },
    // {
    //     path:"**",
    //     redirectto: "page-not-found"
    // }
]

@NgModule ({
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})

export class AppRoutingModule {}