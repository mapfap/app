node {

	def commitHash

    stage('Clone') {
        checkout scm
        commitHash = sh(script: 'git rev-parse HEAD | cut -c1-7', returnStdout: true).trim()
    }
    
    stage('Build') {
      sh "docker build . -t app:latest"
    }

    stage('Deploy') {
      sh "docker stack deploy -c app-stack.yml app"
    }
    
}
