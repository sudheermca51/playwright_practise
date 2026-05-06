pipeline {
    agent any

    environment {
        IMAGE_NAME = 'playwright-tests'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master',
                url: 'https://github.com/sudheermca51/playwright_practise.git'
            }
        }

        stage('Verify Docker') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build --no-cache -t %IMAGE_NAME% .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'docker run --rm %IMAGE_NAME% npx playwright test tests/pop.spec.ts '
            }
        }

        stage('Publish Playwright Report') {
            steps {
                publishHTML([
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])
            }
        }
    }

    post {

        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', fingerprint: true
            archiveArtifacts artifacts: 'test-results/**/*', fingerprint: true
        }

        success {
            echo 'Playwright tests executed successfully.'
        }

        failure {
            echo 'Playwright tests failed.'
        }
    }
}
