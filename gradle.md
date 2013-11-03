# Agenda
* ~15 mintues on a not so new and shiny build tool.
* ~15 minutes on a new and shiny javascript framework.
Please note both technologies where release in 2009... AngularJs is just a larger evolutionary step than Gradle...


* Gradle Intro

* A history of build
* Developers used platform dependent scripts to build projects = not overly protable.

* Ant introduce by Apache in 2000.
* Platform independent tasks: 
** Deleting files.
** Moving files.
** Compiling java files.
** Packing classe into a jar.
* Targets for defining a build lifecycle:
** Before creating a jar, I need to have compiled my classes...

* Maven the next step in the build tool evolution 2004.
* Convention over configuration based build - removing much of the boiler plate Ant configuration.
* Introduced a build lifecycle which covered the most common build tasks ant builds were preforming.
* The major revolution which Maven introduced was dependency management.
* In Ant you had a lib directory filled with jars.
* Not only did this clutter up your source repository
* The lib directory was usually badly managed:
** with libraries lacking versioning information
** or any descrition of there transitive dependencies.

* Maven encouraged declaring your projects depencencies and scopes in your build script.
* Maven then took the responsibility to getting the correct version of the jar file and adding it to the build path of the project.
* It would also determine if that library required any additional libraries and add them to the classpath also.
* While dependency managment does cause some issue - it is a good and saves developers lots of time.
* Slightly after the advent of Maven an extension to Ant was released - Ivy which also allows you to declare your dependencies rather than have them in a lib directory.

* Maven is a great tool and has given us a de-facto standard for laying out projects and the big servers in the cloud which now serve all our depedencies.
* If you keep inline with how Maven mandates your projects should behave - all is well.
* If you do require some additional functionality that core Maven doesn't support:
** There are a large number of available plugins to help.
** Its also relatively easy to write your own plugins.

* However, if you wish to deviate things can become difficult. 
* Maven currently only support two source sets main and test (you can use categories as a hack around this... for integration tests but migration source :)/.
* Maven doesn't easily support polygot development - if you are trying to support multiple languages at one.

* Gradle is the latest step in the build tool evolution.
* Don't take my word for this look at some of the main stream open source projects using gradle.
* Hibernate, Spring Framework, Google (Its the default Android build system replacing Ant and ADT earlier this year), JBoss, LinkedIn, Netflix, Mockito.
* Thoughtworks have move gradle as a techonology to adopt in there last technology radar.

* So what does gradle offer that Maven doesn't:
** A nice groovy based DSL.
** Simple support for multiple configurations and source sets.
** Directed Acyclic Graph (which determines the order in which tasks should be executed)
** Real support for incremental build including self authored tasks.
** Gradle wrapper.
** Easy call into lifecycle - one jar... Dropwizard.


** There are plugins for supporting all major JVM languages, C++ and iOS apps.
** Some tasks for converting from Maven to gradle - they are still incubating and so far I haven't seen how well they work..

* Disadvantages of gradle
* It still does not have the range of native plugins and functions that Maven currently supports. You can still call down to Ant tasks but if feels like a hack.

Example of a few things in maven that would be hard - but how simple in Gradle...
----
* Could create a set of tests which run against different configurations (sets of dependencies) i.e. JBoss wish to test microcontainers against AS5 and AS6 dependencies.
* Could create multiple artifact in single script - maven can't as there is only one dependency set.
* No global dependency exludes.

Image of goldilocks and the bears porriage.
Ant = give complete flexibility but requires lots of boiler plate code especially for multiproject builds.
Maven = takes convention to far and any deviation feels like a hack
Grade = Just right for now?

----









