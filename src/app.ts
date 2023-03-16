import { App } from 'aws-cdk-lib'
import { MoneyManagerStack } from './stacks/money-manager-stack'

const app = new App()
const startAPIStack = new MoneyManagerStack(app, 'MoneyManagerStack')
