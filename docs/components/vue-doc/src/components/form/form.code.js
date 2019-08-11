/* 动态增减表单项 */
export const CodeDynamicAddFormItem =
`    <template>
        <div>
            <sl-form
                :form="dynamicAddItemForm"
                class="salus-advanced-search-form"
                @submit="handleSubmit($event, 'dynamicAddItemForm')"
            >
                <sl-form-item
                    v-for="(k, index) in dynamicAddItemForm.getFieldValue('keys')"
                    :key="k"
                    :label="'Passengers'"
                    :required="false"
                >
                    <sl-input
                        v-decorator="[
                          \`names[\${k}]\`,
                          {
                            preserve: true,
                            rules: [{
                              required: true,
                              whitespace: true,
                              message: 'Please input passenger\\'s name or delete this field.',
                            }],
                          }
                        ]"
                        placeholder="passenger name"
                        style="width: 160px;"
                    />
                    <sl-button
                        icon
                        type="link"
                        :disabled="dynamicAddItemForm.getFieldValue('keys').length === 1"
                        @click="() => remove(k)"
                    >
                        <i class="salus-icon-round-minus-o" />
                    </sl-button>
                </sl-form-item>
                <sl-form-item style="margin-left: 120px;">
                    <sl-button
                        type="dashed"
                        @click="add"
                        icon
                    >
                        <i class="salus-icon-add-o" /> Add field
                    </sl-button>
                </sl-form-item>
                <sl-form-item style="margin-left: 120px;">
                    <sl-button
                        type="primary"
                        html-type="submit"
                    >
                        Submit
                    </sl-button>
                </sl-form-item>
            </sl-form>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                id: 1,
              }
            },
            beforeCreate () {
                this.dynamicAddItemForm = this.$form.createForm(this);
                this.dynamicAddItemForm.getFieldDecorator('keys', { initialValue: [1], preserve: true });
            },
            methods: {
                remove  (k) {
                    const { dynamicAddItemForm } = this;
                    const keys = dynamicAddItemForm.getFieldValue('keys');
                    if (keys.length === 1) {
                        return;
                    }
                    dynamicAddItemForm.setFieldsValue({
                        keys: keys.filter(key => key !== k),
                    });
                },
                add  () {
                    const { dynamicAddItemForm } = this;
                    const keys = dynamicAddItemForm.getFieldValue('keys');
                    const nextKeys = keys.concat(++this.id);
                    // 通知表单检测更改
                    dynamicAddItemForm.setFieldsValue({
                        keys: nextKeys,
                    });
                },
                handleSubmit  (e, form) {
                    e.preventDefault();
                    this[form].validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                        }
                    });
                },
            }
        }
    </script>`
    
/* 水平登陆栏 */
export const CodeHorizontalLogin = 
`    <template>
        <div>
            <sl-form
                layout="inline"
                :form="inlineForm"
                @submit="handleSubmit($event, 'inlineForm')"
            >
                <sl-form-item
                    :validateStatus="userNameError() ? 'error' : ''"
                    :help="userNameError() || ''"
                >
                    <sl-input
                        v-decorator="[
                          'userName',
                          {rules: [{ required: true, message: '请输入用户名!' }]}
                        ]"
                        placeholder="请输入用户名"
                    >
                        <i class="salus-icon-account-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item
                    :validateStatus="passwordError() ? 'error' : ''"
                    :help="passwordError() || ''"
                >
                    <sl-input
                        v-decorator="[
                          'password',
                          {rules: [{ required: true, message: '请输入密码!' }]}
                        ]"
                        type="password"
                        placeholder="请输入密码"
                    >
                        <i class="salus-icon-unlock-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item>
                    <sl-button
                        type="primary"
                        html-type="submit"
                        :disabled="hasErrors(inlineForm.getFieldsError())"
                    >
                        登陆
                    </sl-button>
                </sl-form-item>
            </sl-form>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                inlineForm: this.$form.createForm(this),
              }
            },
            mounted () {
                this.$nextTick(() => {
                    this.inlineForm.validateFields();
                });
            },
            methods: {
                userNameError () {
                    const { getFieldError, isFieldTouched } = this.inlineForm;
                    return isFieldTouched('userName') && getFieldError('userName');
                },
                passwordError () {
                    const { getFieldError, isFieldTouched } = this.inlineForm;
                    return isFieldTouched('password') && getFieldError('password');
                },
                hasErrors (fieldsError) {
                    return Object.keys(fieldsError).some(field => fieldsError[field]);
                },
            }
        }
    </script>`

/* 登陆框 */
export const CodeNormalLogin=
`    <template>
        <div>
            <sl-form
                :form="loginForm"
                @submit="handleSubmit($event, 'loginForm')"
            >
                <sl-form-item v-bind="loginFormLayout">
                    <sl-input
                        v-decorator="[
                          'userName',
                          { rules: [{ required: true, message: '请输入用户名!' }] }
                        ]"
                        placeholder="请输入用户名"
                    >
                        <i class="salus-icon-account-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item v-bind="loginFormLayout">
                    <sl-input
                        v-decorator="[
                          'password',
                          { rules: [{ required: true, message: '请输入密码!' }] }
                        ]"
                        type="password"
                        placeholder="请输入密码"
                    >
                        <i class="salus-icon-unlock-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item v-bind="loginFormLayout">
                    <sl-checkbox
                        v-decorator="[
                          'remember',
                          {
                            valuePropName: 'checked',
                            initialValue: true,
                          }
                        ]"
                    >
                        记住我
                    </sl-checkbox>
                    <a href="javascript:;" class="login-form-forgot">忘记密码</a>
                    <sl-button
                        type="primary"
                        html-type="submit"
                        full
                    >
                        登陆
                    </sl-button>
                    Or <a href="javascript:;">
                        立即注册!
                    </a>
                </sl-form-item>
            </sl-form>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                loginForm: this.$form.createForm(this),
                loginFormLayout: {
                    wrapperCol: {span: 7},
                },
              }
            },
            mounted () {
                this.$nextTick(() => {
                    this.inlineForm.validateFields();
                });
            },
            methods: {
                handleSubmit  (e, form) {
                    e.preventDefault();
                    this[form].validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                        }
                    });
                },
            }
        }
    </script>`

/* 高级搜索 */
export const CodeAdvancedSearch = 
`    <template>
         <div class="form-demo-box">
              <sl-form
                  class="salus-advanced-search-form"
                  :form="searchForm"
                  layout="vertical"
                  @submit="handleSubmit($event, 'searchForm')"
              >
                  <sl-row :gutter="24">
                      <sl-col
                          v-for="i in 10"
                          :key="i"
                          :span="8"
                          :style="{ display: i < count ? 'block' : 'none' }"
                      >
                          <sl-form-item :label="\`Field \${i}\`">
                              <sl-input
                                  v-decorator="[
                                      \`field-\${i}\`,
                                      {
                                        rules: [{
                                          required: true,
                                          message: 'Input something!',
                                        }],
                                      }
                                  ]"
                                  placeholder="placeholder"
                              />
                          </sl-form-item>
                      </sl-col>
                  </sl-row>
                  <sl-row>
                      <sl-col
                          :span="24"
                          :style="{ textAlign: 'right' }"
                      >
                          <sl-button
                              type="primary"
                              html-type="submit"
                          >
                              查询
                          </sl-button>
                          <sl-button
                              :style="{ marginLeft: '8px' }"
                              @click="handleReset"
                          >
                              清除
                          </sl-button>
                          <a
                              href="javascript:;"
                              :style="{ marginLeft: '8px', fontSize: '12px' }"
                              @click="toggle"
                          >
                              {{expand ? '收起' : '展开'}} <i :class="\`salus-icon-arrow-\${expand ? 'up' : 'down'}-o\`"></i>
                          </a>
                      </sl-col>
                  </sl-row>
              </sl-form>
              <div class="search-result-list">
                  Search Result List
              </div>
          </div>
    </template>
    <script>
        export default {
            data() {
              return {
                searchForm: this.$form.createForm(this),
                expand: false,
              }
            },
            mounted () {
                this.$nextTick(() => {
                    this.inlineForm.validateFields();
                });
            },
            methods: {
                handleReset () {
                    this.searchForm.resetFields();
                },
                toggle  () {
                    this.expand = !this.expand;
                },
                handleSubmit  (e, form) {
                    e.preventDefault();
                    this[form].validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                        }
                    });
                },
            }
        }
    </script>`

/* 表单校验 */
export const CodeRegister = 
`    <template>
         <div>
              <sl-form
                :form="validateForm"
                @submit="handleSubmit($event, 'validateForm')"
            >
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="邮箱"
                >
                    <sl-input
                        v-decorator="[
                          'email',
                          {
                            rules: [{
                              type: 'email', message: '邮箱格式不正确!',
                            }, {
                              required: true, message: '请输入邮箱!',
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="密码"
                >
                    <sl-input
                        v-decorator="[
                          'password',
                          {
                            rules: [{
                              required: true, message: '请输入密码!',
                            }, {
                              validator: validateToNextPassword,
                            }],
                          }
                        ]"
                        type="password"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="确认密码"
                >
                    <sl-input
                        v-decorator="[
                          'confirm',
                          {
                            rules: [{
                              required: true, message: '请确认您的密码!',
                            }, {
                              validator: compareToFirstPassword,
                            }],
                          }
                        ]"
                        type="password"
                        @blur="handleConfirmBlur"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                >
                    <span slot="label">
                        别名&nbsp;
                        <sl-tooltip title="您希望别人怎么称呼你?">
                            <i class="salus-icon-quest-mark-o"></i>
                        </sl-tooltip>
                    </span>
                    <sl-input
                        v-decorator="[
                          'nickname',
                          {
                            rules: [{ required: true, message: '请输入别名!', whitespace: true }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="电话"
                >
                    <sl-input
                        v-decorator="[
                          'phone',
                          {
                            rules: [{ required: true, message: '请输入电话!' }],
                          }
                        ]"
                        style="width: 100%"
                    >
                        <sl-select
                            slot="addonBefore"
                            v-decorator="[
                                'prefix',
                                { initialValue: '86' }
                            ]"
                            style="width: 50px"
                        >
                            <sl-select-option value="86">
                                +86
                            </sl-select-option>
                            <sl-select-option value="87">
                                +87
                            </sl-select-option>
                        </sl-select>
                    </sl-input>
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="网址"
                >
                    <sl-input
                        v-decorator="[
                          'website',
                          {
                            rules: [{
                              required: true, message: '请输入网址!',
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="验证码"
                >
                    <sl-row :gutter="8">
                        <sl-col :span="12">
                            <sl-input
                                v-decorator="[
                                  'captcha',
                                  {rules: [{ required: true, message: '请输入验证码!' }]}
                                ]"
                            />
                        </sl-col>
                        <sl-col :span="12">
                            <sl-button>获取验证码</sl-button>
                        </sl-col>
                    </sl-row>
                </sl-form-item>
                <sl-form-item v-bind="validateFormTailLayout">
                    <sl-checkbox
                        v-decorator="['agreement', {valuePropName: 'checked'}]"
                    >
                        我接受该 <a href="javascript:;">协议</a>
                    </sl-checkbox>
                </sl-form-item>
                <sl-form-item v-bind="validateFormTailLayout">
                    <sl-button
                        type="primary"
                        html-type="submit"
                    >
                        提交
                    </sl-button>
                </sl-form-item>
            </sl-form>
          </div>
    </template>
    <script>
        export default {
            data() {
              return {
                validateForm: this.$form.createForm(this),
                validateFormLayout: { // 表单校验-布局
                    labelCol: {span: 3},
                    wrapperCol: {span: 12},
                },
                validateFormTailLayout: {
                    wrapperCol: {span: 14, offset: 6},
                },
                confirmDirty: false,
              }
            },
            methods: {
                handleConfirmBlur  (e) {
                    const value = e.target.value;
                    this.confirmDirty = this.confirmDirty || !!value;
                },
                compareToFirstPassword  (rule, value, callback) {
                    const form = this.validateForm;
                    if (value && value !== form.getFieldValue('password')) {
                        // 把检验规则message改为‘密码不一致’
                        callback('密码不一致!');
                    } else {
                        callback();
                    }
                },
                validateToNextPassword  (rule, value, callback) {
                    const form = this.validateForm;
                    if (value && this.confirmDirty) {
                        form.validateFields(['confirm'], { force: true });
                    }
                    callback();
                },
                handleSubmit  (e, form) {
                    e.preventDefault();
                    this[form].validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                        }
                    });
                },
            }
        }
    </script>`

/* 指定式表单 */
export const CodeValidateReactive =
`    <template>
         <div>
              <sl-form
                :form="directiveForm"
                @submit="handleSubmit($event, 'directiveForm')"
            >
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="名称"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('username') ? 'error' : (fieldTouched('username') ? undefined : '')"
                    :help="fieldError('username') || (directiveForm.isFieldValidating('username') ? '加载中...' : '')"
                >
                    <div slot="extra">名称不超过10个字符</div>
                    <sl-input
                        v-decorator="[
                          'username',
                          {
                            rules: [{
                                max: 10, message: '名称过长!',
                            },{
                                required: true, message: '名称不能为空!',
                            },{
                                validator: validatorAsync
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="邮箱"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('email') ? 'error' : (fieldTouched('email') ? undefined : '')"
                    :help="fieldError('email') || ''"
                >
                    <sl-input
                        v-decorator="[
                          'email',
                          {
                            rules: [{
                              type: 'email', message: '邮箱格式不正确!',
                            }, {
                              required: true, message: '请输入邮箱!',
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="密码"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('password') ? 'error' : (fieldTouched('password') ? undefined : '')"
                    :help="fieldError('password') || ''"
                >
                    <sl-input
                        v-decorator="[
                          'password',
                          {
                            rules: [{
                              required: true, message: '请输入密码!',
                            }, {
                              validator: directiveValidateToNextPassword,
                            }],
                          }
                        ]"
                        type="password"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="确认密码"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('confirm') ? 'error' : (fieldTouched('confirm') ? undefined : '')"
                    :help="fieldError('confirm') || ''"
                >
                    <sl-input
                        v-decorator="[
                          'confirm',
                          {
                            rules: [{
                              required: true, message: '请确认您的密码!',
                            }, {
                              validator: directiveCompareToFirstPassword,
                            }],
                          }
                        ]"
                        type="password"
                        @blur="directiveHandleConfirmBlur"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="评论"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('comment') ? 'error' : (fieldTouched('comment') ? undefined : '')"
                    :help="fieldError('comment') || ''"
                >
                    <sl-textarea
                        row="2"
                        v-decorator="[
                          'comment',
                          {
                            rules: [{ required: true, message: '评论不能为空!' }],
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item :wrapperCol="{span: 12, offset: 7}">
                    <sl-button
                        type="primary"
                        html-type="submit"
                        style="margin-right: 8px"
                        :disabled="validErrors()"
                    >
                        提交
                    </sl-button>
                    <sl-button
                    >
                        重置
                    </sl-button>
                </sl-form-item>
            </sl-form>
          </div>
    </template>
    <script>
        export default {
            data() {
              return {
                directiveForm: this.$form.createForm(this),
                directiveFormLayout: {
                    labelCol: {span: 3},
                    wrapperCol: {span: 12},
                },
                directiveConfirmDirty: false,
              }
            },
            methods: {
                directiveHandleConfirmBlur(e) {
                const value = e.target.value;
                this.directiveConfirmDirty = this.directiveConfirmDirty || !!value;
                },
                directiveCompareToFirstPassword(rule, value, callback) {
                    const form = this.directiveForm;
                    if (value && value !== form.getFieldValue('password')) {
                        callback('密码不一致!');
                    } else {
                        callback();
                    }
                },
                directiveValidateToNextPassword(rule, value, callback) {
                    const form = this.directiveForm;
                    if (value && this.directiveConfirmDirty) {
                        form.validateFields(['confirm'], { force: true });
                    }
                    callback();
                },
                validatorAsync(rule, value, callback) {
                    clearTimeout(this.asyncTimeout);
                    this.asyncTimeout = setTimeout(() => {
                        callback();
                    },1000);
                },
                fieldTouched(name) {
                    return this.directiveForm.isFieldTouched(name);
                },
                fieldError(name) {
                    return this.fieldTouched(name) && this.directiveForm.getFieldError(name);
                },
                validErrors() {
                    const fieldsError = this.directiveForm.getFieldsError();
                    return Object.keys(this.directiveForm.getFieldsValue()).every(field => this.fieldTouched(field))
                        ? Object.keys(fieldsError).some(field => fieldsError[field]) : true;
                },
                handleSubmit  (e, form) {
                    e.preventDefault();
                    this[form].validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                        }
                    });
                },
            }
        }
    </script>`

/* 验证信息显示在右边 */
export const CodeValidateRight = 
`    <template>
        <div>
            <sl-form
                :form="validateFormTextRight"
                @submit="handleSubmit($event, 'validateFormTextRight')"
            >
                <sl-form-item label="发送名单" hasFeedback explainOutside>
                    <sl-radio-group
                        v-decorator="[
                          'radio',
                          {
                            rules: [{ required: true, message: '请选择发送名单类型!' }],
                            initialValue: ''
                          }
                        ]"
                    >
                        <sl-radio value="E">选择群组</sl-radio>
                        <sl-radio value="F">手动输入</sl-radio>
                    </sl-radio-group>
                </sl-form-item>
                <sl-form-item label="发送方式">
                    <sl-radio-group>
                        <sl-radio value="N">立即推送</sl-radio>
                        <sl-radio value="D">定时发送</sl-radio>
                    </sl-radio-group>
                </sl-form-item>
                <sl-form-item
                    label="发送时间"
                    explainOutside
                >
                    <sl-date-picker
                        showTime
                        allowClear
                        format="YYYY-MM-DD HH:mm:ss"
                        v-decorator="[
                          'dateTimeChose',
                          {
                            rules: [{ required: true, message: '请选择发送时间!' }],
                          }
                        ]" />
                </sl-form-item>
                <sl-form-item
                    label="模板名称"
                    validateStatus="error"
                    explainOutside
                    required
                    help="请填写模板名称!"
                >
                    <sl-input
                        placeholder="请输入模板名称"
                    />
                </sl-form-item>
                <sl-form-item
                    label="短信内容"
                    explainOutside
                >
                    <sl-textarea
                        row="2"
                        v-decorator="[
                          'messageArea',
                          {
                            rules: [{ required: true, message: '请填写短信内容!' }],
                          }
                        ]"
                    />
                    <div slot="extra">1.长度不超过1000字符，按67字/条计费</div>
                    <div slot="extra">2.营销类短信，请在短信模板后面增加"回T退订"</div>
                    <div slot="extra">3.短信内容不能含有【】符号</div>
                    <div slot="extra">4.如果是变量内容，模板的格式为：XXX</div>
                </sl-form-item>
                <sl-form-item
                    label="短信签名"
                    hasFeedback
                    explainOutside
                    iconOutside
                >
                    <sl-select
                        showSearch
                        allowClear
                        placeholder="请填写短信签名"
                        v-decorator="[
                          'choseGroup',
                          {
                            rules: [{ required: true, message: '请选择用户群组!' }],
                            initialValue: 'a10'
                          }
                        ]"
                    >
                        <sl-select-option value="a10" >a10</sl-select-option>
                        <sl-select-option value="b11" >b11</sl-select-option>
                    </sl-select>
                </sl-form-item>
                <sl-form-item style="margin-left: 120px;">
                    <sl-button
                        type="primary"
                        html-type="submit"
                    >
                        Submit
                    </sl-button>
                </sl-form-item>
            </sl-form>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                validateFormTextRight: this.$form.createForm(this),
              }
            },
            methods: {
                handleSubmit  (e, form) {
                    e.preventDefault();
                    this[form].validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                        }
                    });
                },
            }
        }
    </script>`

/* 模态框中的表单 */
export const CodeInModal = 
`    <template>
        <div>
            <sl-button type="primary" @click="showModal">
                <span>显示对话框</span>
            </sl-button>
            <sl-modal v-model="isVisible" title="提示" @cancel="handleCancel" @ok="modalSubmit">
                <sl-form :form="modalForm">
                    <sl-form-item
                        label='名称'
                        hasFeedback
                        v-bind="modalFormLayout"
                    >
                        <sl-input
                            placeholder="最多输入20个汉字"
                            v-decorator="[
                              'title',
                              {
                                rules: [{ required: true, message: '请填写名称!' }],
                              }
                            ]"
                        />
                    </sl-form-item>
                    <sl-form-item
                        label="描述"
                        v-bind="modalFormLayout"
                    >
                        <sl-textarea
                            placeholder="最多可输入50个汉字"
                            v-decorator="[
                              'messageArea',
                              {
                                rules: [{ required: true, message: '请填写短信内容!' }],
                              }
                            ]"
                        />
                    </sl-form-item>
                </sl-form>
            </sl-modal>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                modalForm: this.$form.createForm(this),
                modalFormLayout: {
                    labelCol: {span: 6},
                    wrapperCol: {span: 10},
                },
                isVisible: false,
              }
            },
            methods: {
                showModal() {
                this.isVisible = true;
                },
                handleCancel() {
                    this.isVisible = false;
                },
                modalSubmit() {
                  this.modalForm.validateFields((err, values) => {
                    if (err) {
                      return;
                    }
                    console.log('Received values of form: ', values);
                    this.modalForm.resetFields();
                    this.isVisible = false;
                  });
                }
            }
        }
    </script>`

/* v-model表单验证 */
export const CodeValidateStatic =
`    <template>
         <div>
              <sl-form>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="名称"
                    required
                    hasFeedback
                    :validateStatus="validateModelField(modelUserName, /^[\\w-\\.(\u4e00-\u9fa5)]+$/)"
                >
                    <div slot="help" v-if="validateModelFieldEmpty(modelUserName)">请输入名称</div>
                    <div slot="help" v-if="validateModelFieldRule(modelUserName, /^[\\w-\\.(\u4e00-\u9fa5)]+$/)">名称不符合规则</div>
                    <div slot="extra">名称不超过25个字符，仅支持中文、英文、数字、下划线、分隔符“-”、小数点</div>
                    <sl-input v-model="modelUserName.value" @input="modelUserName.dirty = true"/>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    required
                    explainOutside
                    hasFeedback
                    :validateStatus="validateModelField(modelMinScale, /^[\\d]+$/)"
                >
                    <span slot="label">
                        最小伸缩数&nbsp;
                        <sl-tooltip title="提示">
                            <i class="salus-icon-quest-mark-o"></i>
                        </sl-tooltip>
                    </span>
                    <div slot="help" v-if="validateModelFieldEmpty(modelMinScale)">请输入伸缩数</div>
                    <div slot="help" v-if="validateModelFieldRule(modelMinScale, /^[\\d]+$/)">请输入数字</div>
                    <div slot="extra">最小实例数为0，可能会造成伸缩组中文实例支持</div>
                    <sl-input v-model="modelMinScale.value" @input="modelMinScale.dirty = true"/>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="输入校验"
                    explainOutside
                    hasFeedback
                    validateStatus="validating"
                >
                    <sl-input v-model="modelInputValidate.value" />
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    required
                    explainOutside
                    hasFeedback
                    validateStatus="success"
                >
                    <span slot="label">
                        校验成功&nbsp;
                        <sl-tooltip title="提示">
                            <i class="salus-icon-quest-mark-o"></i>
                        </sl-tooltip>
                    </span>
                    <sl-input v-model="modelValidateSuccess.value" />
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="警示信息"
                    hasFeedback
                    validateStatus="warning"
                >
                    <div slot="help">名称不超过25个字符，仅支持中文、英文、数字、下划线、分隔符“-”、小数点</div>
                    <sl-input v-model="modelValidateWarn.value" />
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormTailLayout"
                    label="最大伸缩数"
                >
                    <sl-row :gutter="8">
                        <sl-col :span="12">
                            <sl-select v-model="modelMaxScale.value">
                                <sl-select-option value="Option 1" >Option 1</sl-select-option>
                                <sl-select-option value="Option 2" >Option 2</sl-select-option>
                            </sl-select>
                        </sl-col>
                        <sl-col :span="12">
                            <a href="javascript:;">新建启动配置</a>
                            <sl-tooltip title="提示">
                                <i class="salus-icon-quest-mark-o"></i>
                            </sl-tooltip>
                        </sl-col>
                    </sl-row>
                </sl-form-item>
                <sl-form-item
                    :labelCol="{span: 3}"
                    label="最大伸缩数"
                    hasFeedback
                    validateStatus="validating"
                >
                    <sl-select v-model="modelMaxScale.value" style="width: 331px">
                        <sl-select-option value="Option 1" >Option 1</sl-select-option>
                        <sl-select-option value="Option 2" >Option 2</sl-select-option>
                    </sl-select>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="计费方式"
                >
                    <sl-radio-group v-model="modelBill.value">
                        <sl-radio value="year">包年</sl-radio>
                        <sl-radio value="month">包月</sl-radio>
                        <sl-radio value="day">包天</sl-radio>
                    </sl-radio-group>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="购买数量"
                >
                    <sl-input-number :min="1" :max="10" v-model="modelPurchase.value" handleType="symbols" />
                </sl-form-item>
            </sl-form>
          </div>
    </template>
    <script>
        export default {
            data() {
              return {
                vModelForm: this.$form.createForm(this),
                vModelFormLayout: {
                    labelCol: {span: 3},
                    wrapperCol: {span: 12},
                },
                vModelFormTailLayout: {
                    labelCol: {span: 3},
                    wrapperCol: {span: 10},
                },
                modelUserName: {value: '', dirty: false},
                modelMinScale: {value: '', dirty: false},
                modelInputValidate: {value: '无止境的校验'},
                modelValidateSuccess: {value: '成功'},
                modelValidateWarn: {value: '劝退警告'},
                modelMaxScale: {value: 'Option 1'},
                modelBill: {value: 'year'},
                modelPurchase : {value: 1},
              }
            },
            methods: {
                validateModelField(field, reg) {
                    if(!field.dirty)
                        return ''
                    if(this.validateModelFieldEmpty(field) || this.validateModelFieldRule(field, reg))
                        return 'error'
                    return 'success'
                },
                validateModelFieldEmpty(field) {
                    return field.dirty && !field.value.length;
                },
                validateModelFieldRule(field, reg) {
                    return field.value.length && !reg.test(field.value);
                },
            }
        }
    </script>`

/* jsx */
export const CodeJSX =
`    const CustomizedForm = {}

    CustomizedForm = Form.create({})(CustomizedForm);`

/* template */
export const CodeTemplate =
`    <template>
        <sl-form :form="form" />
    </template>
    <script>
    export default {
      beforeCreate () {
        this.form = this.$form.createForm(this, options)
      },
    }
    </script>`

/* template */
export const CodeValidateFields =
`    const { form: { validateFields } } = this;
    validateFields((errors, values) => {
      // ...
    });
    validateFields(['field1', 'field2'], (errors, values) => {
      // ...
    });
    validateFields(['field1', 'field2'], options, (errors, values) => {
      // ...
    });`

/* field errors */
export const CodeValidateFieldsCbErrors =
`    {
      "userName": {
        "errors": [
          {
            "message": "Please input your username!",
            "field": "userName"
          }
        ]
      },
      "password": {
        "errors": [
          {
            "message": "Please input your Password!",
            "field": "password"
          }
        ]
      }
    }`

/* field values */
export const CodeValidateFieldsCbValues =
`    {
      "userName": "username",
      "password": "password",
    }`