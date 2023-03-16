import { Construct } from 'constructs'
import { Stack } from 'aws-cdk-lib'

export class MoneyManagerStack extends Stack {
  /**
   * The constructor for building the stack.
   * @param {Construct} scope The Construct scope to create the stack in.
   * @param {string} id The ID of the stack to use.
   */
    constructor(scope: Construct, id: string) {
      super(scope, id)
    }
}
