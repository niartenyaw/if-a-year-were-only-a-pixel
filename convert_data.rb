require "csv"
require "json"

csv = CSV.read("data.csv")

headers = csv.first

data = csv[1..-1]

data_objects = []

data.each do |datum|
  obj = {}
  headers.each_with_index { |header, i| obj[header] = datum[i] }
  data_objects << obj
end

File.open("public/data.json", "w") do |file|
  json_string = ""
  data_objects.each { |obj| json_string += "," + obj.to_json }
  file.write("[#{json_string[1..-1]}]")
end
