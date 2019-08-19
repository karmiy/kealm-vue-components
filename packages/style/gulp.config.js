const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

/* 路径 */
const ngStylePath = "./src/angular/index.scss";
const reactStylePath = "./src/react/index.scss";
const vueStylePath = "./src/vue/index.scss";

/* 任务常量 */
const TASK_NAME = {
    "ng": "ng",
    "ng-min": "ng-min",
    "react": "react",
    "react-min": "react-min",
    "vue": "vue",
    "vue-min": "vue-min"
}

/* 公共任务配置 */
function baseTask(entry, ouput, min = false) {

    const _autoprefixer = {
        overrideBrowserslist: ['ie > 9', 'last 2 versions'],
        cascade: false
    };
    const _rename = min ? "salus.min.css" : "salus.css";
    const _ouput = "./dist/" + ouput; 

    const config = () => {
        return gulp.src(entry)
                .pipe(sass.sync())
                .pipe(autoprefixer(_autoprefixer))
                .pipe(rename(_rename))
                .pipe(gulp.dest(_ouput))
    }
    
    const minConfig = () => {
        return gulp.src(entry)
                .pipe(sass.sync())
                .pipe(cssmin())
                .pipe(autoprefixer(_autoprefixer))
                .pipe(rename(_rename))
                .pipe(gulp.dest(_ouput))
    }

    return min ? minConfig : config;
}

/* Angular样式任务配置 */
gulp.task(TASK_NAME.ng, baseTask(ngStylePath, TASK_NAME.ng));
gulp.task(TASK_NAME["ng-min"], baseTask(ngStylePath, TASK_NAME.ng, true));

/* React样式任务配置 */
gulp.task(TASK_NAME.react, baseTask(reactStylePath, TASK_NAME.react));
gulp.task(TASK_NAME["react-min"], baseTask(reactStylePath, TASK_NAME.react, true));

/* Vue样式任务配置 */
gulp.task(TASK_NAME.vue, baseTask(vueStylePath, TASK_NAME.vue));
gulp.task(TASK_NAME["vue-min"], baseTask(vueStylePath, TASK_NAME.vue, true));

gulp.task('copyfont', function() {
    return gulp.src('./src/fonts/**')
      .pipe(cssmin())
      .pipe(gulp.dest('./dist/fonts'));
});

/* 任务列表 */
const taskList = Object.keys(TASK_NAME);
taskList.push('copyfont');
gulp.task('default', taskList);
