node {

    def remote = [:]
        remote.name = 'host'
        remote.host = 'localhost'
        remote.allowAnyHosts = true
    
    stage('Remote SSH') {
        withCredentials(
            [sshUserPrivateKey(credentialsId: 'ssh',
                keyFileVariable: 'identity',
                passphraseVariable: '',
                usernameVariable: 'sshUser')]) {

            remote.user = sshUser
            remote.identityFile = identity

            writeFile file: 'deploy.sh', text: 'touch hello.txt'
            sshScript remote: remote, script: "deploy.sh"
        }
    }

}