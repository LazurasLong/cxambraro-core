puts "SSTA Compiler v1.0.0\nType the name of your .ssta file:"
print ">"
ssta = File.readlines "#{gets.chomp}.ssta"
puts "Type the name of .js file you want to compile to:"
print ">"

File.open "#{gets.chomp}.js", "w+" do |js|
  js.puts "var #{ssta[0].chomp} = [\n"
  ssta[1..-1].each do |line|
    if line == "[\n" or line == "]\n" then js.puts "  #{line.chomp}"
    else js.puts "  \"#{line.chomp}\","
    end
  end
  js.puts "]\n"
end

puts "Finished!"
gets

# by bouncepaw
# made for Ĉambraro SHOVEL 1
