'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import builder = require('botbuilder');

import { Bot } from '../../bot';

const assert = Chai.assert;

suite('Bot Suite -', () => {
    let sut: Bot;
    let sandbox: Sinon.SinonSandbox;

    const univseralBot = {
        dialog: () => { } // tslint:disable-line
    };
    let recognizer: builder.LuisRecognizer; // tslint:disable-line
    const dialog = {
        onDefault: () => { }, // tslint:disable-line
        matches: () => { } // tslint:disable-line
    };
    let connector: builder.IConnector; // tslint:disable-line

    let botStub: Sinon.SinonStub;
    let connectorStub: Sinon.SinonStub;
    let recognizerStub: Sinon.SinonStub;
    let dialogStub: Sinon.SinonStub;
    let rootDialogStub: Sinon.SinonStub;
    let dialogOnDefaultStub: Sinon.SinonStub;
    let dialogMatchStub: Sinon.SinonStub;

    const setupStubs = () => {
        botStub = sandbox.stub(builder, 'UniversalBot');
        recognizerStub = sandbox.stub(builder, 'LuisRecognizer');
        dialogStub = sandbox.stub(builder, 'IntentDialog');
        rootDialogStub = sandbox.stub(univseralBot, 'dialog');
        dialogOnDefaultStub = sandbox.stub(dialog, 'onDefault');
        dialogMatchStub = sandbox.stub(dialog, 'matches');
        botStub.returns(univseralBot);
        recognizerStub.returns(recognizer);
        dialogStub.returns(dialog);
    };

    setup(() => {
        sandbox = Sinon.sandbox.create();
        setupStubs();
    });

    teardown(() => {
        sandbox.restore();
    });

    suite('Console Tests -', () => {
        setup(() => {
            connectorStub = sandbox.stub(builder, 'ConsoleConnector');
            connectorStub.returns(connector);
            sut = new Bot(new builder.ConsoleConnector());
        });
        teardown(() => {
            sut = null;
        });

        test('Console should call required bot framework methods', (done: () => void) => {
            assert.isTrue(botStub.called);
            assert.isTrue(connectorStub.called);
            assert.isTrue(recognizerStub.called);
            assert.isTrue(dialogStub.called);
            assert.isTrue(rootDialogStub.called);
            assert.isTrue(dialogMatchStub.called);
            done();
        });

        test('Console should register all dialogs', (done: () => void) => {
            assert.equal(rootDialogStub.callCount, 5);
            done();
        });

    });

    suite('Emulator Tests -', () => {
        setup(() => {
            connectorStub = sandbox.stub(builder, 'ChatConnector');
            connectorStub.returns(connector);
            sut = new Bot(new builder.ChatConnector());
        });
        teardown(() => {
            sut = null;
        });

        test('Emulator should call required bot framework methods', (done: () => void) => {
            assert.isTrue(botStub.called);
            assert.isTrue(connectorStub.called);
            assert.isTrue(recognizerStub.called);
            assert.isTrue(dialogStub.called);
            assert.isTrue(rootDialogStub.called);
            assert.isTrue(dialogMatchStub.called);
            done();
        });

        test('Emulator should register all dialogs', (done: () => void) => {
            assert.equal(rootDialogStub.callCount, 5);
            done();
        });
    });
});
