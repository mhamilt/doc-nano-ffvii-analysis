INPUT_DIR := xml
OUTPUT_DIR := svg

XML_FILES := $(wildcard $(INPUT_DIR)/*.musicxml)
SVG_FILES := $(patsubst $(INPUT_DIR)/%.musicxml,$(OUTPUT_DIR)/%.svg,$(XML_FILES))

.PHONY: all clean

all: clean $(OUTPUT_DIR) $(SVG_FILES)

$(OUTPUT_DIR):
	mkdir -p $(OUTPUT_DIR)

# Rule for individual conversions
$(OUTPUT_DIR)/%.svg: $(INPUT_DIR)/%.musicxml | $(OUTPUT_DIR)
	verovio $< -o $@  --spacing-linear 0.5 --spacing-non-linear 0.35  --left-margin-accid 2.0 --remove-ids  --xml-id-checksum --adjust-page-height  --adjust-page-width --footer none

clean:
	rm -rf $(OUTPUT_DIR)