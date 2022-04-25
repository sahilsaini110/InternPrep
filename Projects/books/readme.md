## Books (REST APIs)
 > steps
    >- start django project (before that setup the env and install the dependencies)
    >- start app inside the project
    >- register app and drf in settings.py
    >- write models

    ## Models
    > why models
        >- models are use to define the fields.
        >- we write models and django understands them and covert them to sql data.
        >- and create the tables in the database.
        >- not only this model is responsible for creating our tables but also we can use that class in order to query and mutate our data.

>     
        >- Import models in views.py

    ## Views
    > why views
        >- view ia either a class or a function, that is going to return data for specific endpoint.
        >- so view is responsible for all of the logic to create and return the data. 