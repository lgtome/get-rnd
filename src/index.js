import { printStructure, compose } from './helpers'
import { getRnd, getRndDefault } from './getRandom'
compose(printStructure, getRnd, printStructure, getRndDefault)
