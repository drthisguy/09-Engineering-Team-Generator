class Templates {

    main(manager, cards) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/spacelab/bootstrap.min.css">
            <title>Team Profiler</title>
        </head>
        
        <body>
            <nav class="navbar navbar-expand bg-primary mb-4">   
            </nav>
            <section class="container mt-5">
                <div class="card text-center bg-primary">
                    <div class="card-header text-white"> Team Profiler </div>
                    <div class="jumbotron">
                        <h1 class="display-3">Meet Your Engineering Team</h1>
                        <p class="lead">A quick look at the people you'll be working with.</p>
                        
                            
                        
                        <hr class="my-4">
       
                        <div class="row">
                        <div class="col-4">
                        <div class="card border-dark m-3">
                              <div class="card-header">Team Manager</div>
                              <div class="card-body">
                                <h4 class="card-title">${manager.name}</h4>
                                <p class="card-text text-left">Email: ${manager.email}</p>
                                <p class="card-text text-left">Emplyoyee id #: ${manager.id}</p>
                                <p class="card-text text-left">Office Room #: ${manager.office}</p>
                              </div>
                            </div>
                          </div>

                          ${cards}

                         </div>
                        </div>
                      </div>
                    </div>
                  <div class="card-footer"> &copy; 2020 Version 1.0.0 </div>
              </section>
            </body>
          </html> `
         
                   
    }


    engineer(engineer) {
        return `
        <div class="col-4">
        <div class="card border-primary m-3">
          <div class="card-header">Engineer</div>
          <div class="card-body">
            <h4 class="card-title">${engineer.name}</h4>
            <p class="card-text text-left">Email: ${engineer.email}</p>
            <p class="card-text text-left">Emplyoyee id #: ${engineer.name}</p>
            <p class="card-text text-left">Github Profile: ${engineer.github}</p>
          </div>
        </div>
      </div>`
    }

    intern(intern) {
        return `
        <div class="col-4">
        <div class="card border-primary m-3">
          <div class="card-header">Intern</div>
          <div class="card-body">
            <h4 class="card-title">${intern.name}</h4>
            <p class="card-text text-left">Email: ${intern.email}</p>
            <p class="card-text text-left">Emplyoyee id #: ${intern.name}</p> <p class="card-text text-left">School: ${intern.school}</p>
          </div>
        </div>
      </div>`
    }
}
module.exports = Templates;
