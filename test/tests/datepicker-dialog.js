'use strict';

const { ariaTest } = require('..');
const { By, Key } = require('selenium-webdriver');
const assertAttributeValues = require('../util/assertAttributeValues');
const assertAriaLabelledby = require('../util/assertAriaLabelledby');
const assertAriaLabelExists = require('../util/assertAriaLabelExists');
const assertAriaRoles = require('../util/assertAriaRoles');
const assertRovingTabindex = require('../util/assertRovingTabindex');
const assertTabOrder = require('../util/assertTabOrder');

const exampleFile = 'dialog-modal/datepicker-dialog.html';

const ex = {
  dialogSelector: '#example [role="dialog"]',
  buttonSelector: '#example button.icon',
  statusSelector: '#example [role="status"]',
  gridSelector: '#example [role="grid"]',
  gridcellSelector: '#example [role="gridcell"]'
};

// Button Tests

ariaTest('"aria-label" attribute on button', exampleFile, 'calendar-button-aria-label', async (t) => {
  t.plan(1);
  await assertAriaLabelExists(t,  ex.buttonSelector);
});

ariaTest('"aria-expanded" attribute on button', exampleFile, 'calendar-button-aria-label', async (t) => {
  t.plan(1);
  await assertAttributeValues(t,  ex.buttonSelector, 'aria-expanded', 'false');
});

// Dialog Tests

ariaTest('role="dialog" attribute on div', exampleFile, 'dialog-role', async (t) => {
  t.plan(1);
  await assertAriaRoles(t, 'example', 'dialog', 1, 'div');
});


