initSidebarItems({"derive":[["AppLabel",""],["DynamicPlugin","Generates a dynamic plugin entry point function for the given `Plugin` type."]],"enum":[["CoreStage","The names of the default [`App`] stages."],["RunMode","Determines the method used to run an [`App`]’s `Schedule`."],["StartupStage","The names of the default [`App`] startup stages."]],"mod":[["prelude",""]],"struct":[["App","A container of app logic and data."],["AppExit","An event that indicates the [`App`] should exit. This will fully exit the app process at the start of the next tick of the schedule."],["AppLabelId","Stores one of a set of strongly-typed labels for a class of objects."],["PluginGroupBuilder","Facilitates the creation and configuration of a [`PluginGroup`]. Provides a build ordering to ensure that [`Plugin`]s which produce/require a `Resource` are built before/after dependent/depending [`Plugin`]s. [`Plugin`]s inside the group can be disabled, enabled or reordered."],["ScheduleRunnerPlugin","Configures an [`App`] to run its `Schedule` according to a given [`RunMode`]."],["ScheduleRunnerSettings","The configuration information for the [`ScheduleRunnerPlugin`]."],["StartupSchedule","The label for the startup `Schedule`, which runs once at the beginning of the [`App`]."]],"trait":[["AppLabel","Types that can be converted to a(n) [`id_name`]."],["Plugin","A collection of Bevy app logic and configuration."],["PluginGroup","Combines multiple [`Plugin`]s into a single unit."]],"type":[["CreatePlugin","A type representing an unsafe function that returns a mutable pointer to a [`Plugin`]. It is used for dynamically loading plugins."]]});