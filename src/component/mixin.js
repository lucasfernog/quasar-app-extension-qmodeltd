export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: "popup",
            validator: v => ["popup", "inline"].includes(v)
        },
        value: {
            required: true
        }
    },

    methods: {
        onInput(val) {
            this.$emit("input", val);
        }
    }
}