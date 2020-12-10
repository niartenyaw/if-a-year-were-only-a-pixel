require "csv"
require "json"

csv = CSV.read("data.csv")

headers = csv.first

allowed_headers = %w[title category year years_ago type feet_from_beginning years_from_beginning]

data = csv[1..-1]

data_objects = []

data.each do |datum|
  obj = {}
  headers.each_with_index { |header, i| obj[header] = datum[i] if allowed_headers.include?(header) }
  data_objects << obj
end

File.open("public/data.json", "w") do |file|
  json_string = ""
  data_objects.each { |obj| json_string += ",\n" + obj.to_json }
  file.write("[\n#{json_string[1..-1]}\n]")
end
