class Templates {

    main(manager) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/spacelab/bootstrap.min.css">
            <title>Team Generator</title>
        </head>
        
        <body>
            <!-- Navigator -->
            <nav class="navbar navbar-expand bg-primary mb-4">
                
            </nav>
        
            <section class="container mt-5">
                <div class="card text-center bg-primary">
                    <div class="card-header text-white"> Team Generator </div>
                    <div class="jumbotron">
                        <h1 class="display-3">Meet Your Engineering Team</h1>
                        <p class="lead">A quick look at the people you'll be working with.</p>
                        
                            
                        
                        <hr class="my-4">
                        <div class="text-left"></div>
                        <div class="card border-dark mb-3" style="max-width: 20rem;">
                            <div class="card-header">Team Manager</div>
                            <div class="card-body">
                              <h4 class="card-title">${manager.name}</h4>
                              <p class="card-text text-left">Email Address: ${manager.email}</p>
                              <p class="card-text text-left">Emplyoyee id #: ${manager.id}</p>
                              <p class="card-text text-left">Office Room #: ${manager.office}</p>
                              
                            </div>
                          </div>`
                   
    }


    engineer(engineer) {
        return `
        <div class="card border-primary mb-3" style="max-width: 20rem;">
                            <div class="card-header">Team Manager</div>
                            <div class="card-body">
                              <h4 class="card-title">${engineer.name}</h4>
                              <p class="card-text text-left">Email Address: ${engineer.email}</p>
                              <p class="card-text text-left">Emplyoyee id #: ${engineer.id}</p>
                              <p class="card-text text-left">Github Profile: ${engineer.github}</p>
                            </div>
                          </div>`
    }

    intern(intern) {
        return `
        <div class="card border-info mb-3" style="max-width: 20rem;">
                            <div class="card-header">Team Manager</div>
                            <div class="card-body">
                              <h4 class="card-title">${intern.name}</h4>
                              <p class="card-text text-left">Email Address: ${intern.email}</p>
                              <p class="card-text text-left">Emplyoyee id #: ${intern.id}</p>
                              <p class="card-text text-left">School: ${intern.school}</p>
                            </div>
                          </div>`
    }
}
module.exports = Templates;
