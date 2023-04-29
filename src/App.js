import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";

import WorkIcon from "@mui/icons-material/Work";

import { RestProvider } from "./dataProvider/";
import { AuthProvider } from "./authProvider";
import { CustomLayout } from "./layout/";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { ProjectList, ProjectEdit, ProjectCreate } from "./pages/projects";

import { Dashboard } from "./pages/dashboard";

const App = () => (
	<Admin
		loginPage={LoginPage}
		authProvider={AuthProvider}
		dataProvider={RestProvider}
		layout={CustomLayout}
		dashboard={Dashboard}
		disableTelemetry
	>
		<CustomRoutes noLayout>
			<Route path="signup" element={<SignupPage />} />
		</CustomRoutes>
		<Resource
			name="projects"
			list={ProjectList}
			edit={ProjectEdit}
			create={ProjectCreate}
			icon={WorkIcon}
		/>
	</Admin>
);

export default App;
