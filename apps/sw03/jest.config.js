module.exports = {
  name: 'sw03',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw03',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
