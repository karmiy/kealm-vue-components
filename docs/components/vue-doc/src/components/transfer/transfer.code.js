/* 基础穿梭框 */
export const CodeBasic = 
`    <template>
        <div>
            <sl-transfer
                :dataSource="mockData"
                :titles="['Source', 'Target']"
                :targetKeys="targetKeys"
                :selectedKeys="selectedKeys"
                @change="handleChange"
                @selectChange="handleSelectChange"
                @scroll="handleScroll"
                :render="item=>item.title"
            />
        </div>
    </template>
    <script>
        export default {
            data() {
                const mockData = [];
                for (let i = 0; i < 20; i++) {
                    mockData.push({
                        key: (i + 1).toString(),
                        title: \`content\${i + 1}\`,
                        description: \`description of content\${i + 1}\`,
                        disabled: i % 3 < 1,
                    });
                }
                const oriTargetKeys = mockData
                    .filter(item => item.key % 3 > 1)
                    .map(item => item.key);
                return {
                    mockData,
                    targetKeys: oriTargetKeys,
                    selectedKeys: ['1', '4'],
                }
            },
            methods: {
                handleChange(nextTargetKeys, direction, moveKeys) {
                    this.targetKeys = nextTargetKeys
    
                    console.log('targetKeys: ', nextTargetKeys);
                    console.log('direction: ', direction);
                    console.log('moveKeys: ', moveKeys);
                },
                handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
                    this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]
    
                    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
                    console.log('targetSelectedKeys: ', targetSelectedKeys);
                },
                handleScroll(direction, e) {
                    console.log('direction:', direction);
                    console.log('target:', e.target);
                },
            }
        }
    </script>`

/* 带搜索的穿梭框 */
export const CodeSearch = 
`    <template>
        <div>
            <sl-transfer
                :dataSource="mockData"
                showSearch
                :filterOption="filterOption"
                :targetKeys="targetKeys"
                @change="handleChange"
                @search="handleSearch"
                :render="item=>item.title"
            >
            </sl-transfer>
        </div>
    </template>
    <script>
        export default {
            data() {
                const mockData = [];
                for (let i = 0; i < 20; i++) {
                    mockData.push({
                        key: (i + 1).toString(),
                        title: \`content\${i + 1}\`,
                        description: \`description of content\${i + 1}\`,
                        disabled: i % 3 < 1,
                    });
                }
                const oriTargetKeys = mockData
                    .filter(item => item.key % 3 > 1)
                    .map(item => item.key);
                return {
                    mockData,
                    targetKeys: oriTargetKeys,
                }
            },
            methods: {
                handleChange(nextTargetKeys, direction, moveKeys) {
                    this.targetKeys = nextTargetKeys
    
                    console.log('targetKeys: ', nextTargetKeys);
                    console.log('direction: ', direction);
                    console.log('moveKeys: ', moveKeys);
                },
                filterOption(inputValue, option) {
                    return option.description.indexOf(inputValue) > -1;
                },
                handleSearch (dir, value) {
                    console.log('search:', dir, value);
                },
            }
        }
    </script>`

/* 自定义footer的穿梭框 */
export const CodeFooterCustom =
`    <template>
        <div>
            <sl-transfer
                :dataSource="mockData"
                :targetKeys="targetKeys"
                @change="handleChange"
                :render="item=>item.title"
                :filterSource="filterSource"
                :filterTarget="filterTarget"
            >
                <sl-select v-model="selectSource" allowClear slot="sourceFooter" slot-scope="props" placeholder="请选择标签" @change="footerSelectChange($event, props.direction)">
                    <sl-select-option v-for="item in props.dataSource" :key="item.key" :disabled="item.disabled" >{{item.title}}</sl-select-option>
                </sl-select>
                <sl-select v-model="selectTarget" allowClear slot="targetFooter" slot-scope="props" placeholder="请选择标签" @change="footerSelectChange($event, props.direction)">
                    <sl-select-option v-for="item in props.dataSource" :key="item.key" :disabled="item.disabled" >{{item.title}}</sl-select-option>
                </sl-select>
            </sl-transfer>
        </div>
    </template>
    <script>
        export default {
            data() {
                const mockData = [];
                for (let i = 0; i < 20; i++) {
                    mockData.push({
                        key: (i + 1).toString(),
                        title: \`content\${i + 1}\`,
                        description: \`description of content\${i + 1}\`,
                        disabled: i % 3 < 1,
                    });
                }
                const oriTargetKeys = [], oltTargetKeys = [];
                mockData.forEach(item => {
                  item.key % 3 > 1 ? oriTargetKeys.push(item.key) : oltTargetKeys.push(item.key);
                })
                return {
                    mockData,
                    sourceKeys: oltTargetKeys,
                    targetKeys: oriTargetKeys,
                    filterSource: oltTargetKeys,
                    filterTarget: oriTargetKeys,
                    selectSource: undefined,
                    selectTarget: undefined,
                }
            },
            methods: {
                handleChange(nextTargetKeys) {
                    this.filterTarget = this.targetKeys = nextTargetKeys
                    this.filterSource = this.sourceKeys = this.mockData.filter(item => !nextTargetKeys.includes(item.key)).map(item => item.key)
                    this.selectSource = this.selectTarget = undefined
                },
                footerSelectChange(value, direction) {
                    if(direction === 'right') {
                        this.filterTarget = value ? [this.targetKeys.find(key => key === value)] : [...this.targetKeys];
                    }else {
                        this.filterSource = value? [this.sourceKeys.find(key => key === value)] : [...this.sourceKeys];
                    }
                }
            }
        }
    </script>`;
