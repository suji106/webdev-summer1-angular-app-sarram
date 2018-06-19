import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserAdminComponent} from "./user-admin/user-admin.component";
import {SectionListComponent} from "./section-list/section-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: WhiteBoardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'course/:courseId', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
    { path: 'course/:courseId/enroll', component: SectionListComponent },
    {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
    {path: '', component: WhiteBoardComponent},
    {path: 'user-admin', component: UserAdminComponent},
    {path: 'course/:courseId/section', component: UserAdminComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
