node {

    def remote = [:]
        remote.name = 'host'
        remote.host = '172.17.0.1'
        remote.allowAnyHosts = true
    
    stage('Deploy') {
        withCredentials(
            [sshUserPrivateKey(credentialsId: 'ssh',
                keyFileVariable: 'identity',
                passphraseVariable: '',
                usernameVariable: 'sshUser')]) {

            remote.user = sshUser
            remote.identityFile = identity

            def tmpFolder = "/var/tmp/${env.BUILD_NUMBER}/"
            sshCommand remote: remote, command: "mkdir -p ${tmpFolder}"

            sh 'ls -la'

            sshPut remote: remote, from: 'index.js', into: tmpFolder
            sshPut remote: remote, from: 'package.json', into: tmpFolder
            sshPut remote: remote, from: 'package-lock.json', into: tmpFolder
            sshPut remote: remote, from: 'Dockerfile', into: tmpFolder

            writeFile file: 'deploy.sh', text: 'docker build . -t app:latest'
            sshScript remote: remote, script: "deploy.sh"

        }
    }

}